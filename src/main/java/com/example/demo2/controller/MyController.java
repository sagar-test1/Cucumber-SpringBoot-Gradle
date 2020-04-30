package com.example.demo2.controller;

import com.example.demo2.model.MyModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {

    @Autowired
    private MyModel model;

    @RequestMapping(value="/getName",method = RequestMethod.GET)
    public int getName() {


        return 100;
    }

    @RequestMapping(value="/getNameByID",method= RequestMethod.GET)
    public int getNameByID(@RequestParam(name ="id") int id) {

        if(id==1)
        {
            return 101;
        }
        else if(id==2) {
           return 102;
        }
        else return 0;


    }

}
