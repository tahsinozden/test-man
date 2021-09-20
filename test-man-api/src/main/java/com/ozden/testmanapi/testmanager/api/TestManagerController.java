package com.ozden.testmanapi.testmanager.api;

import com.ozden.testmanapi.testmanager.entity.Test;
import org.springframework.web.bind.annotation.*;

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

    // TODO: handle validations, id, status etc
    @PatchMapping("/{testId}")
    public Test updateTest(@PathVariable Long testId, @RequestBody Test test) {
        return test;
    }

    // TODO: handle validations, id, status etc
    @PostMapping
    public Test createTest(@RequestBody Test test) {
        return test;
    }

}
