package com.example.demo2;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
                        features = "src/test/resources",
                        glue = {"src/test/java/com/example/demo2"},
                        plugin ={"html:target/cucumber-html-report"}
                )
public class CalculatorTest {
}
