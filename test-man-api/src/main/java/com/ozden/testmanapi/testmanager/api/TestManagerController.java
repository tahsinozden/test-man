package com.ozden.testmanapi.testmanager.api;

import com.ozden.testmanapi.testmanager.TestManagerService;
import com.ozden.testmanapi.testmanager.entity.TestEntity;
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
    public List<TestEntity> getAllTests() {
        return testManagerService.getAllTests();
    }

    // TODO: handle validations, id, status etc
    @PatchMapping("/{testId}")
    public TestEntity updateTest(@PathVariable Long testId, @RequestBody TestEntity testEntity) {
        return testManagerService.updateTest(testId, testEntity);
    }

    // TODO: handle validations, id, status etc
    @PostMapping
    public TestEntity createTest(@RequestBody TestEntity testEntity) {
        return testManagerService.saveTest(testEntity);
    }

}
