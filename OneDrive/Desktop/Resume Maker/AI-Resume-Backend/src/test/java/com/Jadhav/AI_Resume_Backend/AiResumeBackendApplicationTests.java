package com.Jadhav.AI_Resume_Backend;

import com.Jadhav.AI_Resume_Backend.service.ResumeService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;

@SpringBootTest
class AiResumeBackendApplicationTests {

	@Autowired
	private ResumeService resumeService;
	@Test
	void contextLoads() throws IOException {
		resumeService.generateResumeResponse("I am Prathamesh Jadhav with 2 years of java exp .");
	}

}
