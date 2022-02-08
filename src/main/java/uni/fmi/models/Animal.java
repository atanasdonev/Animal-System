package uni.fmi.models;
import java.time.LocalDate;
import java.util.*;

public class Animal {
    private String id;
    private int age;
    private String gender;
    private String name;
    private LocalDate dateOfLastBirth;
    private Set<Animal> children;
    private Animal[] parents;

    public Animal(String id) {
        this.id = id;
    }

    public Animal(String id, String gender,int age) {
        this.gender = gender;
        this.id = id;
        this.age = age;
    }

    /**
     * @return
     */
    public int getAge() {
        return age;
    }

    /**
     * @param age 
     * @return
     */
    public void setAge(int age) {
        this.age = age;
    }

    /**
     * @return
     */
    public String getGender() {
        return gender;
    }

    /**
     * @param gender 
     * @return
     */
    public void setGender(String gender) {
        this.gender = gender;
    }

    /**
     * @return
     */
    public String getName() {
        return name;
    }

    /**
     * @param name 
     * @return
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return
     */
    public String getId() {
        return id;
    }

    /**
     * @param id 
     * @return
     */
    public void setId(String id) {
        this.id = id;
    }


    public LocalDate getDateOfLastBirth(){
        return dateOfLastBirth;
    }

    public void setDateOfLastBirth(LocalDate dateOfLastBirth){
        this.dateOfLastBirth = dateOfLastBirth;
    }
    /**
     * @return
     */
    public Set<Animal> getChildren() {
        if(children == null){
            children = new HashSet<Animal>();
        }
        return children;
    }

    /**
     * @param animal 
     * @return
     */
    public void setChildren(Set<Animal> animal) {
        if(animal != null){
        this.children = animal;
        }else{
            this.children.clear();
        }
    }

    /**
     * @return
     */
    public Animal[] getParents() {
        return parents;
    }

    /**
     * @param animal 
     * @return
     */
    public void setParents(Animal[] animal) {
        this.parents = animal;
    }

    /**
     * @param age
     * @param gender
     * @return
     */

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Animal animal = (Animal) o;
        return id == animal.id && age == animal.age && gender.equals(animal.gender) && name.equals(animal.name) && children.equals(animal.children) && Arrays.equals(parents, animal.parents);
    }

    @Override
    public int hashCode() {
        int result = Objects.hash(id, age, gender, name, children);
        result = 31 * result + Arrays.hashCode(parents);
        return result;
    }
}