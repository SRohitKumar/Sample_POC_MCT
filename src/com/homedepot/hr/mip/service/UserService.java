package com.homedepot.hr.mip.service;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.CacheControl;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.core.SecurityContext;

import org.apache.log4j.Logger;

import com.homedepot.hr.mip.dto.UserProfileDTO;
import com.homedepot.ta.aa.catalina.realm.Profile;

@Path("/user")
public class UserService {

	private static final Logger LOGGER = Logger.getLogger(UserService.class);
	@Context HttpHeaders httpHeaders;
	/**
	 * Get details about the user currently logged in
	 * 
	 * @return user details
	 * 
	 */
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/userProfile")
	public Response getUserProfile(@Context SecurityContext securityContext, @Context HttpServletRequest request) {
		if (LOGGER.isDebugEnabled()) {
			LOGGER.debug("getUserProfile() - Start");
		}
		UserProfileDTO profileTo = new UserProfileDTO();
		// get the user profile
		Profile profile = Profile.getCurrent();
		Map<String, String> profileMap = profile!=null ? profile.getProperties():null;
		// if the profile is not null and the profile contains properties
		if (profile != null && profileMap != null
				&& profileMap.size() > 0) {
			 profileTo.setFirstName(profileMap.get(Profile.FIRST_NAME));
			 profileTo.setLastName(profileMap.get(Profile.LAST_NAME));
			 profileTo.setMiddleName(profileMap.get(Profile.MIDDLE_NAME));
			 profileTo.setUserId(profileMap.get(Profile.USER_ID).toUpperCase());
			 profileTo.setCommonName(profileTo.getLastName()+" "+profileTo.getFirstName());
			 profileTo.setPhoneNumber(profileMap.get(Profile.PHONE));
			 profileTo.setJobTitle(profileMap.get(Profile.JOB_TITLE));
			 profileTo.setLocationNumber(profileMap.get(Profile.LOCATION_NUMBER));
			 profileTo.setLocationType(profileMap.get(Profile.LOCATION_TYPE));
		} 
		HttpSession session = request.getSession();
		session.setAttribute("USER_PROFILE", profileTo);
		if (LOGGER.isDebugEnabled()) {
			LOGGER.debug("getUserProfile() - End");
		}
		return getResponse(profileTo, MediaType.APPLICATION_JSON_TYPE);
	}
	public static final CacheControl NO_CACHE;
	static {
		NO_CACHE = new CacheControl();
		NO_CACHE.setNoCache(true);
	}
	public static Response getResponse(Object obj, MediaType mediaType) {
		Response response = null;

		if (mediaType != null
				&& mediaType.toString().equalsIgnoreCase(
						MediaType.APPLICATION_JSON)) {
			response = Response.status(Status.OK).cacheControl(NO_CACHE)
					.type(MediaType.APPLICATION_JSON_TYPE).entity(obj).build();
		} else if (mediaType != null
				&& mediaType.toString().equalsIgnoreCase(
						MediaType.APPLICATION_OCTET_STREAM)) {
			response = Response.status(Status.OK)
					.type(MediaType.APPLICATION_OCTET_STREAM).entity(obj)
					.build();
		}else if (mediaType != null
				&& mediaType.toString().equalsIgnoreCase(
						MediaType.TEXT_PLAIN)) {
			response = Response.status(Status.OK)
					.type(MediaType.TEXT_PLAIN).entity(obj)
					.build();
		}
		return response;
	}
	
	@GET
	@Path("/logout")
	@Produces(MediaType.APPLICATION_JSON)
	public Response logout(@Context HttpServletRequest request)
	{
		request.getSession().invalidate();
		return Response.status(Response.Status.OK).entity("Successfully logout").build();
	} // end function getUserDetails()
	
}