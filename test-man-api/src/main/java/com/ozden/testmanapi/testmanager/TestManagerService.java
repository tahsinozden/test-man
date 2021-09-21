package com.ozden.testmanapi.testmanager;

import com.ozden.testmanapi.testmanager.entity.TestEntity;
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
    public TestEntity saveTest(TestEntity testEntity) {
        return testManagerRepository.save(testEntity);
    }

    @Transactional
    public TestEntity updateTest(Long testId, TestEntity testEntity) {
        TestEntity dbTestEntity = testManagerRepository.findById(testId).orElseThrow(() -> new RuntimeException("not found!"));
        if (!StringUtils.equals(testEntity.getStatus(), dbTestEntity.getStatus())) {
            dbTestEntity.setStatus(testEntity.getStatus());
        }
        return testManagerRepository.save(dbTestEntity);
    }

    public List<TestEntity> getAllTests() {
        return testManagerRepository.findAll();
    }
}
