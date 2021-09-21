package com.ozden.testmanapi.testmanager.api.mapper;

import com.ozden.testmanapi.testmanager.api.entity.TestApiView;
import com.ozden.testmanapi.testmanager.entity.TestEntity;
import com.ozden.testmanapi.testmanager.entity.TestStatus;
import org.springframework.stereotype.Component;

import java.util.Objects;
import java.util.function.Function;

@Component
public class TestEntityToTestApiViewMapper implements Function<TestEntity, TestApiView> {

    @Override
    public TestApiView apply(TestEntity testEntity) {
        return TestApiView.builder()
                .id(testEntity.getId())
                .name(testEntity.getName())
                .status(Objects.nonNull(testEntity.getStatus()) ? TestStatus.valueOf(testEntity.getStatus()) : null)
                .description(testEntity.getDescription())
                .build();
    }
}
