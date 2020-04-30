package com.example.demo2;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.springframework.web.client.RestTemplate;

import static org.junit.Assert.assertEquals;


public class ApiStepdefs {

    Integer response = null;
    String url = "http://localhost:8081/";

    //String urlById = "http://localhost:8081/getNameByID?id=";


    @Given("^The client has API URL /getName$")
    public void theClientHasAPIURLGetName() {
    }

    @When("^The client calls /getName$")
    public void theClientCallsGetName() {
        RestTemplate restTemplate = new RestTemplate();
     response =  restTemplate.getForObject(url+"getName",Integer.class);
    }

    @Then("^The client receives the Name (\\d+)$")
    public void theClientReceivesTheName(Integer arg0) {
        assertEquals(arg0, response);
    }

    @Given("^The client has API URL$")
    public void theClientHasAPIURL() {

    }

    @When("^The client calls /getNameById with id (\\d+)$")
    public void theClientCallsGetNameByIdWithId(int arg0) {
        RestTemplate restTemplate = new RestTemplate();
        response =  restTemplate.getForObject(url+"getNameByID?id="+arg0,Integer.class);
    }



    @Then("^The client receives the Name as (\\d+)$")
    public void theClientReceivesTheNameAs(Integer arg0) {
        assertEquals(arg0, response);
    }





    /*@Then("^The client receives the Name as (\\d+)$")
    public void theClientReceivesTheNameXYZ(int result) {
      assertEquals(result, response);
    }*/
}
