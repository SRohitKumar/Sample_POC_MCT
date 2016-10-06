package com.homedepot.hr.mip.dto;

public class UserProfileDTO {
private String firstName;
private String lastName;
private String commonName;
private String phoneNumber;
private String middleName;
private String locationNumber;
private String jobTitle;
private String userId;
private String userRole;
private boolean isAdmin;
private boolean isStoreUser;
private boolean isVendorUser;
private String ldapGroups;
private String locationType;
/**
 * @return the firstName
 */
public String getFirstName() {
	return firstName;
}
/**
 * @param firstName the firstName to set
 */
public void setFirstName(String firstName) {
	this.firstName = firstName;
}
/**
 * @return the lastName
 */
public String getLastName() {
	return lastName;
}
/**
 * @param lastName the lastName to set
 */
public void setLastName(String lastName) {
	this.lastName = lastName;
}
/**
 * @return the commonName
 */
public String getCommonName() {
	return commonName;
}
/**
 * @param commonName the commonName to set
 */
public void setCommonName(String commonName) {
	this.commonName = commonName;
}
/**
 * @return the phoneNumber
 */
public String getPhoneNumber() {
	return phoneNumber;
}
/**
 * @param phoneNumber the phoneNumber to set
 */
public void setPhoneNumber(String phoneNumber) {
	this.phoneNumber = phoneNumber;
}
/**
 * @return the middleName
 */
public String getMiddleName() {
	return middleName;
}
/**
 * @param middleName the middleName to set
 */
public void setMiddleName(String middleName) {
	this.middleName = middleName;
}
/**
 * @return the locationNumber
 */
public String getLocationNumber() {
	return locationNumber;
}
/**
 * @param locationNumber the locationNumber to set
 */
public void setLocationNumber(String locationNumber) {
	this.locationNumber = locationNumber;
}
/**
 * @return the jobTitle
 */
public String getJobTitle() {
	return jobTitle;
}
/**
 * @param jobTitle the jobTitle to set
 */
public void setJobTitle(String jobTitle) {
	this.jobTitle = jobTitle;
}
/**
 * @return the userId
 */
public String getUserId() {
	return userId;
}
/**
 * @param userId the userId to set
 */
public void setUserId(String userId) {
	this.userId = userId;
}
/**
 * @return the userRole
 */
public String getUserRole() {
	return userRole;
}
/**
 * @param userRole the userRole to set
 */
public void setUserRole(String userRole) {
	this.userRole = userRole;
}
/**
 * @return the isAdmin
 */
public boolean isAdmin() {
	return isAdmin;
}
/**
 * @param isAdmin the isAdmin to set
 */
public void setAdmin(boolean isAdmin) {
	this.isAdmin = isAdmin;
}
/**
 * @return the isStoreUser
 */
public boolean isStoreUser() {
	return isStoreUser;
}
/**
 * @param isStoreUser the isStoreUser to set
 */
public void setStoreUser(boolean isStoreUser) {
	this.isStoreUser = isStoreUser;
}
/**
 * @return the isVendorUser
 */
public boolean isVendorUser() {
	return isVendorUser;
}
/**
 * @param isVendorUser the isVendorUser to set
 */
public void setVendorUser(boolean isVendorUser) {
	this.isVendorUser = isVendorUser;
}
/**
 * @return the ldapGroups
 */
public String getLdapGroups() {
	return ldapGroups;
}
/**
 * @param ldapGroups the ldapGroups to set
 */
public void setLdapGroups(String ldapGroups) {
	this.ldapGroups = ldapGroups;
}
/**
 * @return the locationType
 */
public String getLocationType() {
	return locationType;
}
/**
 * @param locationType the locationType to set
 */
public void setLocationType(String locationType) {
	this.locationType = locationType;
}
/* (non-Javadoc)
 * @see java.lang.Object#toString()
 */
@Override
public String toString() {
	StringBuilder builder = new StringBuilder();
	builder.append("UserProfileDTO [firstName=");
	builder.append(firstName);
	builder.append(", lastName=");
	builder.append(lastName);
	builder.append(", commonName=");
	builder.append(commonName);
	builder.append(", phoneNumber=");
	builder.append(phoneNumber);
	builder.append(", middleName=");
	builder.append(middleName);
	builder.append(", locationNumber=");
	builder.append(locationNumber);
	builder.append(", jobTitle=");
	builder.append(jobTitle);
	builder.append(", userId=");
	builder.append(userId);
	builder.append(", userRole=");
	builder.append(userRole);
	builder.append(", isAdmin=");
	builder.append(isAdmin);
	builder.append(", isStoreUser=");
	builder.append(isStoreUser);
	builder.append(", isVendorUser=");
	builder.append(isVendorUser);
	builder.append(", ldapGroups=");
	builder.append(ldapGroups);
	builder.append(", locationType=");
	builder.append(locationType);
	builder.append("]");
	return builder.toString();
}


}
