package com.ozden.testmanapi.testmanager;

import com.ozden.testmanapi.testmanager.entity.TestEntity;
import com.ozden.testmanapi.testmanager.entity.TestStatus;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import javax.persistence.NoResultException;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class TestManagerService {

    private final TestManagerRepository testManagerRepository;

    @Transactional
    public TestEntity saveTest(TestEntity testEntity) {
        if (Objects.isNull(testEntity.getStatus())) {
            testEntity.setStatus(TestStatus.Undefined.getValue());
        }
        return testManagerRepository.save(testEntity);
    }

    @Transactional
    public TestEntity updateTest(Long testId, TestEntity testEntity) {
        TestEntity dbTestEntity = testManagerRepository.findById(testId).orElseThrow(() -> new NoResultException("no records found!"));
        if (!StringUtils.equals(testEntity.getStatus(), dbTestEntity.getStatus())) {
            dbTestEntity.setStatus(testEntity.getStatus());
        }
        return testManagerRepository.save(dbTestEntity);
    }

    public List<TestEntity> getAllTests() {
        return testManagerRepository.findAll();
    }
}
