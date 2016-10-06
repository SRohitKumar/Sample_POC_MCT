//////////////////////////////////////////////////////////////////////////////////////////////////
//This program is proprietary to The Home Depot, and is not to be reproduced, used or disclosed
//without the permission of:
//
//The Home Depot
//2455 Paces Ferry Road, SE
//Atlanta, GA 30339.
//
//@FileName: UserDTO
//@Application: FinanceWebUpload
//////////////////////////////////////////////////////////////////////////////////////////////////
package com.homedepot.hr.mip.dto;

import java.util.List;

import com.thoughtworks.xstream.annotations.XStreamAlias;


/**
 * 
 * @author rxn8087
 *
 */

@XStreamAlias("UserProfile")
public class UserDTO {

	
    @XStreamAlias("UserID")
    private String userID;
    
    @XStreamAlias("FirstName")
    private String firstName;
    
    @XStreamAlias("LastName")
    private String lastName;
    
    private List<String> role;
    
    @XStreamAlias("MiddleName")
    private String middleName;
    
    @XStreamAlias("GenQualifier")
    private String genQualifier;
    
    @XStreamAlias("CommonName")
    private String commonName;
    
    @XStreamAlias("BUID")
    private String buid;
    
    @XStreamAlias("DepartmentNumber")
    private short departmentNumber;
    
    @XStreamAlias("EmailAddress")
    private String emailAddress;
    
    @XStreamAlias("JobTitle")
    private String jobTitle;
    
    @XStreamAlias("LocationNumber")
    private short locationNumber;
    
    @XStreamAlias("LocationType")
    private String locationType;
    
    @XStreamAlias("PreferredLang")
    private String preferredLang;
    
    @XStreamAlias("SysusrID")
    private String sysusrID;
    
    @XStreamAlias("PhoneNumber")
    private String phoneNumber;
    
    /**
     * @return userID
     */
    public String getUserID() {
		return userID;
	}
	/**
	 * @param userID
	 */
	public void setUserID(String userID) {
		this.userID = userID;
	}
	/**
	 * @return firstName
	 */
	public String getFirstName() {
		return firstName;
	}
	/**
	 * @param firstName
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	/**
	 * @return lastName
	 */
	public String getLastName() {
		return lastName;
	}
	/**
	 * @param lastName
	 */
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	/**
	 * @return middleName
	 */
	public String getMiddleName() {
		return middleName;
	}
	/**
	 * @param middleName
	 */
	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}
	/**
	 * @return genQualifier
	 */
	public String getGenQualifier() {
		return genQualifier;
	}
	/**
	 * @param genQualifier
	 */
	public void setGenQualifier(String genQualifier) {
		this.genQualifier = genQualifier;
	}
	/**
	 * @return commonName
	 */
	public String getCommonName() {
		return commonName;
	}
	/**
	 * @param commonName
	 */
	public void setCommonName(String commonName) {
		this.commonName = commonName;
	}
	/**
	 * @return buid
	 */
	public String getBuid() {
		return buid;
	}
	/**
	 * @param buid
	 */
	public void setBuid(String buid) {
		this.buid = buid;
	}
	/**
	 * @return departmentNumber
	 */
	public short getDepartmentNumber() {
		return departmentNumber;
	}
	/**
	 * @param departmentNumber
	 */
	public void setDepartmentNumber(short departmentNumber) {
		this.departmentNumber = departmentNumber;
	}
	/**
	 * @return emailAddress
	 */
	public String getEmailAddress() {
		return emailAddress;
	}
	/**
	 * @param emailAddress
	 */
	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}
	/**
	 * @return jobTitle
	 */
	public String getJobTitle() {
		return jobTitle;
	}
	/**
	 * @param jobTitle
	 */
	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}
	/**
	 * @return locationNumber
	 */
	public short getLocationNumber() {
		return locationNumber;
	}
	/**
	 * @param locationNumber
	 */
	public void setLocationNumber(short locationNumber) {
		this.locationNumber = locationNumber;
	}
	/**
	 * @return locationType
	 */
	public String getLocationType() {
		return locationType;
	}
	/**
	 * @param locationType
	 */
	public void setLocationType(String locationType) {
		this.locationType = locationType;
	}
	/**
	 * @return preferredLang
	 */
	public String getPreferredLang() {
		return preferredLang;
	}
	/**
	 * @param preferredLang
	 */
	public void setPreferredLang(String preferredLang) {
		this.preferredLang = preferredLang;
	}
	/**
	 * @return sysusrID
	 */
	public String getSysusrID() {
		return sysusrID;
	}
	/**
	 * @param sysusrID
	 */
	public void setSysusrID(String sysusrID) {
		this.sysusrID = sysusrID;
	}
	/**
	 * @return phoneNumber
	 */
	public String getPhoneNumber() {
		return phoneNumber;
	}
	/**
	 * @param phoneNumber
	 */
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	/**
	 * @return the role
	 */
	public List<String> getRole() {
		return role;
	}
	/**
	 * @param role the role to set
	 */
	public void setRole(List<String> role) {
		this.role = role;
	}
	
	

}
