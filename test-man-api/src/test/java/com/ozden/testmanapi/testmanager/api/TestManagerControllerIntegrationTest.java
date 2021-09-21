package com.ozden.testmanapi.testmanager.api;

import com.ozden.testmanapi.testmanager.api.entity.TestApiView;
import com.ozden.testmanapi.testmanager.entity.TestEntity;
import com.ozden.testmanapi.testmanager.entity.TestStatus;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.reactive.server.WebTestClient;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureWebTestClient(timeout = "60000")
@ExtendWith({SpringExtension.class})
class TestManagerControllerIntegrationTest {

    @Autowired
    private WebTestClient webTestClient;

    @LocalServerPort
    private int randomServerPort;

    @Test
    void shouldCreateNewTestWhenAllFieldsAreValid() {
        // given
        TestEntity test = new TestEntity(null, "new name", TestStatus.Passed.getValue(), "");

        // when
        webTestClient
                .post()
                .uri(String.format("http://localhost:%s/api/v1/tests", randomServerPort))
                .bodyValue(test)
                .exchange()
                .expectStatus().isOk()
                .expectBody(TestEntity.class).value(createdTest -> {
                    // then
                    assertThat(createdTest).isNotNull();
                    assertThat(createdTest.getId()).isNotNull();
                    assertThat(createdTest.getName()).isEqualTo(test.getName());
                    assertThat(createdTest.getStatus()).isEqualTo(test.getStatus());
                });
    }

    @Test
    void shouldCreateNewTestWhenStatusIsMissing() {
        // given
        TestEntity test = new TestEntity(null, "new name", null, "");

        // when
        webTestClient
                .post()
                .uri(String.format("http://localhost:%s/api/v1/tests", randomServerPort))
                .bodyValue(test)
                .exchange()
                .expectStatus().isOk()
                .expectBody(TestEntity.class).value(createdTest -> {
                    // then
                    assertThat(createdTest).isNotNull();
                    assertThat(createdTest.getId()).isNotNull();
                    assertThat(createdTest.getName()).isEqualTo(test.getName());
                    assertThat(createdTest.getStatus()).isEqualTo(TestStatus.Undefined.getValue());
                    assertThat(createdTest.getDescription()).isEqualTo(test.getDescription());
                });
    }

    @Test
    void shouldCreateNewTestWhenDescriptionIsMissing() {
        // given
        TestEntity test = new TestEntity(null, "new name", TestStatus.Failed.getValue(), null);

        // when
        webTestClient
                .post()
                .uri(String.format("http://localhost:%s/api/v1/tests", randomServerPort))
                .bodyValue(test)
                .exchange()
                .expectStatus().isOk()
                .expectBody(TestEntity.class).value(createdTest -> {
                    // then
                    assertThat(createdTest).isNotNull();
                    assertThat(createdTest.getId()).isNotNull();
                    assertThat(createdTest.getName()).isEqualTo(test.getName());
                    assertThat(createdTest.getStatus()).isEqualTo(test.getStatus());
                    assertThat(createdTest.getDescription()).isNull();
                });
    }

    @Test
    void shouldNotCreateNewTestWhenNameIsMissing() {
        // given
        TestEntity test = new TestEntity(null, null, TestStatus.Passed.getValue(), "");

        // when
        webTestClient
                .post()
                .uri(String.format("http://localhost:%s/api/v1/tests", randomServerPort))
                .bodyValue(test)
                .exchange()
                .expectStatus().isBadRequest();
    }

    @Test
    void shouldNotCreateNewTestWhenNameIsEmty() {
        // given
        TestEntity test = new TestEntity(null, "", TestStatus.Passed.getValue(), "");

        // when
        webTestClient
                .post()
                .uri(String.format("http://localhost:%s/api/v1/tests", randomServerPort))
                .bodyValue(test)
                .exchange()
                .expectStatus().isBadRequest();
    }

    @Test
    void shouldNotCreateNewTestWhenUnknownStatusIsProvided() {
        // given
        TestEntity test = new TestEntity(null, "name", "not-known", "");

        // when
        webTestClient
                .post()
                .uri(String.format("http://localhost:%s/api/v1/tests", randomServerPort))
                .bodyValue(test)
                .exchange()
                .expectStatus().isBadRequest();
    }

    @Test
    void shouldUpdateExistingTestWhenStatusIsUpdated() {
        // given
        TestEntity test = new TestEntity(null, "new name", TestStatus.Passed.getValue(), "");

        webTestClient
                .post()
                .uri(String.format("http://localhost:%s/api/v1/tests", randomServerPort))
                .bodyValue(test)
                .exchange()
                .expectStatus().isOk()
                .expectBody(TestEntity.class).value(createdTest -> {
                    createdTest.setStatus(TestStatus.Undefined.getValue());
                    webTestClient
                            // when
                            .patch()
                            .uri(String.format("http://localhost:%s/api/v1/tests/%s", randomServerPort, createdTest.getId()))
                            .bodyValue(createdTest)
                            .exchange()
                            .expectStatus().isOk()
                            .expectBody(TestApiView.class).value(updatedTest -> {
                                // then
                                assertThat(updatedTest).isNotNull();
                                assertThat(updatedTest.getId()).isNotNull();
                                assertThat(updatedTest.getName()).isEqualTo(test.getName());
                                assertThat(updatedTest.getStatus()).isEqualTo(TestStatus.Undefined.getValue());
                            });
                });
    }

    @Test
    void shouldNotUpdateExistingTestWhenStatusIsUpdatedWithInvalidStatus() {
        // given
        TestEntity test = new TestEntity(null, "new name", TestStatus.Passed.getValue(), "");

        webTestClient
                .post()
                .uri(String.format("http://localhost:%s/api/v1/tests", randomServerPort))
                .bodyValue(test)
                .exchange()
                .expectStatus().isOk()
                .expectBody(TestEntity.class).value(createdTest -> {
                    createdTest.setStatus("unknown");
                    webTestClient
                            // when
                            .patch()
                            .uri(String.format("http://localhost:%s/api/v1/tests/%s", randomServerPort, createdTest.getId()))
                            .bodyValue(createdTest)
                            .exchange()
                            .expectStatus().isBadRequest();
                });
    }

    @Test
    void shouldGetNotFoundWhenNonExistingTestIdIsProvided() {
        // given
        TestEntity test = new TestEntity(null, "new name", TestStatus.Passed.getValue(), "");

        webTestClient
                // when
                .patch()
                .uri(String.format("http://localhost:%s/api/v1/tests/%s", randomServerPort, -1))
                .bodyValue(test)
                .exchange()
                .expectStatus().isNotFound();
    }
}