package uni.fmi.models;
import java.util.*;

public class Farm {
    private String name;
    private Set<Association> associations;
    private Set<Owner> owner;

    public Farm() {
    }

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
    public Set<Association> getAssociation() {
        if(associations == null){
            associations = new HashSet<>();
        }
        return associations;
    }

    /**
     * @param associations
     * @return
     */
    public void setAssociation(Set<Association> associations) {
        if(associations != null){
            this.associations = associations;
        }else{
            this.associations.clear();
        }
    }

    /**
     * @return
     */
    public Set<Owner> getOwner() {
        if(owner == null){
            owner = new HashSet<>();
        }
        return owner;
    }

    /**
     * @param owner 
     * @return
     */
    public void setOwner(Set<Owner> owner) {
        if(owner != null){
            this.owner = owner;
        }else{
            this.owner.clear();
        }
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Farm farm = (Farm) o;
        return name.equals(farm.name) && associations.equals(farm.associations) && owner.equals(farm.owner);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, associations, owner);
    }
}