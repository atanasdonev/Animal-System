package uni.fmi.models;
import java.util.*;

public class Owner {
    private String name;
    private Set<Farm> farm;

    public Owner() {
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
    public Set<Farm> getFarm() {
       if(farm == null){
           farm = new HashSet<>();
       }
        return farm;
    }

    /**
     * @param farm 
     * @return
     */
    public void setFarm(Set<Farm> farm) {
        if(farm != null){
            this.farm = farm;
        }else{
            this.farm.clear();
        }
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Owner owner = (Owner) o;
        return name.equals(owner.name) && farm.equals(owner.farm);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, farm);
    }
}