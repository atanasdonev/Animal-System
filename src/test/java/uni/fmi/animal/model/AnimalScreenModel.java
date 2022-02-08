package uni.fmi.animal.model;

import uni.fmi.animal.AnimalService;

import java.time.LocalDate;

public class AnimalScreenModel {
    private String id;
    private String gender;
    private int age;
    private String message;
    private LocalDate dateOfLastBirth;

    public void setAnimalId(String id) {
        this.id = id;
    }

    public void setAnimalGender(String gender) {
        this.gender = gender;
    }

    public void setAnimalAge(int age) {
        this.age = age;
    }

    public void setDateOfLastBirth(LocalDate dateOfLastBirth) {
        this.dateOfLastBirth = dateOfLastBirth;
    }

    public void clickCheckButton() {
        message = AnimalService.checkAnimal(id, gender, age, dateOfLastBirth);
    }

    public String getMessage() {
        return message;
    }


}
