package com.ozden.testmanapi.testmanager.api.entity;

import com.ozden.testmanapi.testmanager.api.validations.group.OnCreate;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@Builder(toBuilder = true)
public class TestApiView {

    private Long id;

    @NotBlank(message = "name cannot be blank", groups = {OnCreate.class})
    @NotNull(message = "name cannot be null", groups = {OnCreate.class})
    private String name;

    private String status;
    private String description;
}
