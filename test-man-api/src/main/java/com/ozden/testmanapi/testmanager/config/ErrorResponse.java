package com.ozden.testmanapi.testmanager.config;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Getter
@RequiredArgsConstructor
public class ErrorResponse {

    private final List<String> messages;
}
