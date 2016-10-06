package com.homedepot.hr.answerletter.service;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.log4j.Logger;

@Path("/marketing")
public class MarketingService {

	private static final Logger logger = Logger.getLogger(MarketingService.class);
	
	@GET
	@Path("/showData")
	@Produces({ "application/pdf", MediaType.APPLICATION_JSON, MediaType.TEXT_PLAIN })
	public Response showData(@Context HttpServletRequest request, @QueryParam("pos") String pos) {
		Response response = null;
		try {
			ClassLoader classLoader = MarketingService.class.getClassLoader();
			String fileName = "1.pdf";
			if(pos!=null) {
				if(pos.startsWith("2")) {
					fileName = "2.pdf";
				} else if(pos.startsWith("3")) {
					fileName = "3.pdf";
				}
			}
			File file = new File(classLoader.getResource("").getPath()+fileName);
			response = Response.ok(file, "application/pdf").header("Content-Disposition",	"filename=" + file.getName()).build();
		}catch (Exception e) {
			return Response.status(202).build();
		} 
		return response;
	}
	@GET
	@Path("/getEvents")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getEvents() {
		Response response = null;
		try {
			ClassLoader classLoader = MarketingService.class.getClassLoader();
			FileReader reader = new FileReader(classLoader.getResource("").getPath()+"event-fixture.json");
			
			BufferedReader br = new BufferedReader(reader);
			String events = br.readLine();
			br.close();
			response = Response.status(Response.Status.OK).type(MediaType.APPLICATION_JSON).entity(events).build(); 
		} catch (Exception e) {
			e.printStackTrace();
		}
		return response;	
	}
	

}
