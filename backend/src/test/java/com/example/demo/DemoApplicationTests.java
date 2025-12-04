package com.example.demo;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;

import java.time.Duration;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;

// CLASSE SIMPLES JUNIT, SEM @SpringBootTest!
class DemoApplicationTests {

    private WebDriver driver;
    private final String FRONTEND_URL = "http://localhost:5173"; 
    private WebDriverWait wait; 

    @BeforeEach
    void setup() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    }

    @Test
    void testCarregamentoDoComponenteNoticias() {
        driver.get(FRONTEND_URL + "/"); 
        final String COMPONENT_ID = "sessao-noticias"; 

        try {
            WebElement elemento = wait.until(
                ExpectedConditions.visibilityOfElementLocated(By.id(COMPONENT_ID))
            );
            
            assertTrue(elemento.isDisplayed(), 
                       "O componente '" + COMPONENT_ID + "' não está visível.");

        } catch (org.openqa.selenium.TimeoutException e) {
            fail("FALHA DE CARREGAMENTO: O componente '" + COMPONENT_ID + 
                 "' não apareceu na página dentro do tempo limite (10s).");
        }
    }

    @AfterEach
    void teardown() {
        if (driver != null) {
            driver.quit();
        }
    }
    
}