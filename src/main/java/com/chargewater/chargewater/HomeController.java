
package com.chargewater.chargewater;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class HomeController {

	@RequestMapping(value = {"/", "/Home","/Navigation","About"})
	public String index() {
		return "index";
	}

}
// end::code[]