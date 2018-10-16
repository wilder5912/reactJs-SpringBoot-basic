package com.chargewater.chargewater;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Controller
@RestController
@RequestMapping(value="/sales")
@CrossOrigin(methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
        RequestMethod.DELETE })
public class SalesController {

    @GetMapping(value="/getSales")
    public String getSales(){

        return "holas wilder";
    }

    @GetMapping(value="/getSalesList")
    public HashMap<String, String> getSalesList(){
        HashMap<String, String> sell =  new HashMap<>();
        sell.put("juan","sell");
        sell.put("tito","sell");
        sell.put("pep","sell");
        return sell;
    }
    @GetMapping(value="/getSalesListList")
    public List<String> getSalesListList(){
        List<String> dataSell = new ArrayList<String>();
        dataSell.add("100");
        dataSell.add("50");
        return dataSell;
    }


}
