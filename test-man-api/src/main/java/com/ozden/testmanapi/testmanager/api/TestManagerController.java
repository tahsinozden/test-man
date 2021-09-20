package com.ozden.testmanapi.testmanager.api;

import com.ozden.testmanapi.testmanager.entity.Test;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

// TODO: make the config in general place
@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/api/v1/tests")
public class TestManagerController {

    @GetMapping
    public List<Test> getAllTests() {
        return List.of(
                new Test(1L, "Test should run 1", "Passed", ""),
                new Test(2L, "Test should run 2", "Failed", "")
        );
    }
}
