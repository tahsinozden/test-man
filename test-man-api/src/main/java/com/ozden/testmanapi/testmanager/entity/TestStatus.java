package com.ozden.testmanapi.testmanager.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum TestStatus {

    // for the sake of simplicity, the statuses are stored in enum
    // in prod, it should be stored in a different table with relation to the main table
    Passed("Passed"),
    Failed("Failed"),
    Undefined("Undefined");

    private final String value;
}
