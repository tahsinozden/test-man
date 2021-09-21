package com.ozden.testmanapi.testmanager.api;

import com.ozden.testmanapi.testmanager.TestManagerService;
import com.ozden.testmanapi.testmanager.api.entity.TestApiView;
import com.ozden.testmanapi.testmanager.api.mapper.TestApiViewToTestEntityMapper;
import com.ozden.testmanapi.testmanager.api.mapper.TestEntityToTestApiViewMapper;
import com.ozden.testmanapi.testmanager.api.validations.group.OnCreate;
import com.ozden.testmanapi.testmanager.api.validations.group.OnUpdate;
import com.ozden.testmanapi.testmanager.entity.TestEntity;
import com.ozden.testmanapi.testmanager.entity.TestStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
@RequestMapping("/api/v1/tests")
@RequiredArgsConstructor
@Validated(value = OnCreate.class)
public class TestManagerController {

    private final TestManagerService testManagerService;
    private final TestApiViewToTestEntityMapper testApiViewToTestEntityMapper;
    private final TestEntityToTestApiViewMapper testEntityToTestApiViewMapper;

    @GetMapping
    public List<TestApiView> getAllTests() {
        return testManagerService.getAllTests().stream()
                .map(testEntityToTestApiViewMapper)
                .collect(Collectors.toList());
    }

    @PatchMapping("/{testId}")
    @Validated(value = OnUpdate.class)
    public TestApiView updateTest(@PathVariable Long testId, @RequestBody @Valid TestApiView testApiView) {
        TestEntity testEntity = testApiViewToTestEntityMapper.apply(testApiView);
        return testEntityToTestApiViewMapper.apply(testManagerService.updateTest(testId, testEntity));
    }

    @PostMapping
    public TestApiView createTest(@RequestBody @Valid TestApiView testApiView) {
        TestEntity testEntity = testApiViewToTestEntityMapper.apply(testApiView);
        return testEntityToTestApiViewMapper.apply(testManagerService.saveTest(testEntity));
    }

    @GetMapping("/statuses")
    public List<String> getAvailableStatuses() {
        return Stream.of(TestStatus.values())
                .map(TestStatus::getValue)
                .collect(Collectors.toList());
    }
}
