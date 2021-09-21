package com.ozden.testmanapi.testmanager;

import com.ozden.testmanapi.testmanager.entity.TestEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestManagerRepository extends JpaRepository<TestEntity, Long> {
}
