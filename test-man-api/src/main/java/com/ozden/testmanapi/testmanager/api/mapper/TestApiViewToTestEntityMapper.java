package com.ozden.testmanapi.testmanager.api.mapper;

import com.ozden.testmanapi.testmanager.api.entity.TestApiView;
import com.ozden.testmanapi.testmanager.entity.TestEntity;
import org.springframework.stereotype.Component;

import java.util.Objects;
import java.util.function.Function;

@Component
public class TestApiViewToTestEntityMapper implements Function<TestApiView, TestEntity> {

    @Override
    public TestEntity apply(TestApiView testApiView) {
        return TestEntity.builder()
                .id(testApiView.getId())
                .name(testApiView.getName())
                .status(Objects.nonNull(testApiView.getStatus()) ? testApiView.getStatus().getValue() : null)
                .description(testApiView.getDescription())
                .build();
    }
}
