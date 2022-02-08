package uni.fmi.animal;

import uni.fmi.models.Animal;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;

public class AnimalService {

    private static ArrayList<Animal> animalDB = new ArrayList<>();
    private static final LocalDate currentDate = LocalDate.now();

    public static String checkAnimal(String id, String gender, int age, LocalDate dateOfLastBirth) {
        long monthsBetween = ChronoUnit.MONTHS.between(dateOfLastBirth, currentDate);

        animalDB.clear();
        animalDB.add(new Animal("animal1"));
        animalDB.add(new Animal("animal2"));
        animalDB.add(new Animal("animal3"));
        animalDB.add(new Animal("animal4"));
        if (id == null || gender == null || age <= 0) {
            return "Въведете данни за животното";
        }

        boolean canAnimalBeParent = animalDB.stream().anyMatch(a -> a.getId().equals(id));
        if(!canAnimalBeParent){
            return "Грешни данни";
        }

        if(canAnimalBeParent){
            if(gender.equals("male") && age >= 2){
                return "Животното отговаря на изискванията да бъде родител";
            }else if(gender.equals("female")  && age >= 2 && monthsBetween >= 10){
                return "Животното отговаря на изискванията да бъде родител";
            }
        }return "Животното не отговаря на изискванията да бъде родител";
    }
}

