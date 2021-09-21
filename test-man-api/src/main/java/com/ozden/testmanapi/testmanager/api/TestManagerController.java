package com.ozden.testmanapi.testmanager.api;

import com.ozden.testmanapi.testmanager.TestManagerService;
import com.ozden.testmanapi.testmanager.entity.Test;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// TODO: make the config in general place
@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/api/v1/tests")
@RequiredArgsConstructor
public class TestManagerController {

    private final TestManagerService testManagerService;

    @GetMapping
    public List<Test> getAllTests() {
        return testManagerService.getAllTests();
    }

    // TODO: handle validations, id, status etc
    @PatchMapping("/{testId}")
    public Test updateTest(@PathVariable Long testId, @RequestBody Test test) {
        return testManagerService.updateTest(testId, test);
    }

    // TODO: handle validations, id, status etc
    @PostMapping
    public Test createTest(@RequestBody Test test) {
        return testManagerService.saveTest(test);
    }

}
