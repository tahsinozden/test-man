package com.ozden.testmanapi.testmanager;

import com.ozden.testmanapi.testmanager.entity.Test;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TestManagerService {

    private final TestManagerRepository testManagerRepository;

    @Transactional
    public Test saveTest(Test test) {
        return testManagerRepository.save(test);
    }

    @Transactional
    public Test updateTest(Long testId, Test test) {
        Test dbTest = testManagerRepository.findById(testId).orElseThrow(() -> new RuntimeException("not found!"));
        if (!StringUtils.equals(test.getStatus(), dbTest.getStatus())) {
            dbTest.setStatus(test.getStatus());
        }
        return testManagerRepository.save(dbTest);
    }

    public List<Test> getAllTests() {
        return testManagerRepository.findAll();
    }
}
