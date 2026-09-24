package com.jeevaspring.demoproject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class JeevaController {
	
	@GetMapping("/hi")
	public String myMethod(Model model) {
		 model.addAttribute("name","Jeeva from Neyveli");
		 return "index";
	}
}
