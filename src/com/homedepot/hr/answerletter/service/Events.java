package com.homedepot.hr.answerletter.service;

import java.util.List;

public class Events {

	private int id;
	private String name;
	private List<String> fixtures;
	public Events() {
	}
	
	public Events(int id, String name, List<String> fixtures) {
		super();
		this.id = id;
		this.name = name;
		this.fixtures = fixtures;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<String> getFixtures() {
		return fixtures;
	}
	public void setFixtures(List<String> fixtures) {
		this.fixtures = fixtures;
	}
	
}
