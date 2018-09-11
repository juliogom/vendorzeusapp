package co.com.sa.zeus.domain;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Table(name="color")
public class Color implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Size(max = 255)
	@Column(name = "name", length = 255)
	private String name;

	@Size(max = 255)
	@Column(name = "hexadecimal", length = 255)
	private String hexadecimal;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getHexadecimal() {
		return hexadecimal;
	}

	public void setHexadecimal(String hexadecimal) {
		this.hexadecimal = hexadecimal;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}

		User user = (User) o;
		return !(user.getId() == null || getId() == null) && Objects.equals(getId(), user.getId());
	}

	@Override
	public int hashCode() {
		return Objects.hashCode(getId());
	}

	@Override
	public String toString() {
		return "User{" + "name='" + name + '\'' + ", hexadecimal='" + hexadecimal + '\'' + "}";
	}

}
