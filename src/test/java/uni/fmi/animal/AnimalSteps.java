package uni.fmi.animal;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uni.fmi.animal.model.AnimalScreenModel;

import java.time.LocalDate;

import static org.junit.Assert.assertEquals;

public class AnimalSteps {
    private AnimalScreenModel animalScreen;

    @Given("^Потребителя отваря екрана за проверка на животни$")
    public void openAnimalCheckScreen() {
        animalScreen = new AnimalScreenModel();
    }

    @When("^Въведе \\\"([^\\\"]*)\\\" за номер на животно$")
    public void enterAnimalId(String id) {
        animalScreen.setAnimalId(id);
    }

    @When("^Животното е \\\"([^\\\"]*)\\\"$")
    public void checkAnimalGender(final String gender) {
        animalScreen.setAnimalGender(gender);
        if (gender.equals("male")) {
            LocalDate date = LocalDate.of(1000, 10, 10);
            animalScreen.setDateOfLastBirth(date);
        } else if (gender.equals("female")) {
            animalScreen.setDateOfLastBirth(LocalDate.of(2021, 2, 7));
        }
    }

    @When("^Животното е на повече от две години$")
    public void checkOverageAnimal() {
        animalScreen.setAnimalAge(3);
    }

    @When("^Натисне бутона за проверка$")
    public void clickCheckButton() {
        animalScreen.clickCheckButton();
    }

    @Then("^Вижда съобщение: \\\"([^\\\"]*)\\\"$")
    public void checkMessage(final String expectedMessage) {
        assertEquals(expectedMessage, animalScreen.getMessage());
    }

    @When("^Животното е на по-малко от две години$")
    public void checkUnderageAnimal() {
        animalScreen.setAnimalAge(1);
    }

    @When("^Животното не е раждало през последните десет месеца$")
    public void checkDateOfLastBirth() {
        animalScreen.setDateOfLastBirth(LocalDate.of(2021, 2, 7));
    }

    @When("^Животното е раждало през последните десет месеца$")
    public void checkRecentDateOfLastBirth() {
        animalScreen.setDateOfLastBirth(LocalDate.of(2021, 12, 7));
    }
}
