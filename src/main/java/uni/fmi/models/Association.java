package uni.fmi.models;
import java.util.*;

public class Association {
    private String name;
    private Set<Farm> farms;

    public Association() {
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
    public Set<Farm> getFarms() {
        if(farms == null){
            farms = new HashSet<>();
        }
        return farms;
    }

    /**
     * @param farms
     * @return
     */
    public void setFarms(Set<Farm> farms) {
        if(farms != null){
            this.farms = farms;
        }else{
            this.farms.clear();
        }
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Association that = (Association) o;
        return name.equals(that.name) && farms.equals(that.farms);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, farms);
    }
}