package com.ozden.testmanapi.testmanager.api.mapper;

import com.ozden.testmanapi.testmanager.api.entity.TestApiView;
import com.ozden.testmanapi.testmanager.entity.TestEntity;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class TestEntityToTestApiViewMapper implements Function<TestEntity, TestApiView> {

    @Override
    public TestApiView apply(TestEntity testEntity) {
        return TestApiView.builder()
                .id(testEntity.getId())
                .name(testEntity.getName())
                .status(testEntity.getStatus())
                .description(testEntity.getDescription())
                .build();
    }
}
