package com.Jadhav.AI_Resume_Backend.service;

import java.io.IOException;
import java.util.Map;

public interface ResumeService {
    Map<String, Object> generateResumeResponse(String userResumeDescription) throws IOException;
}
