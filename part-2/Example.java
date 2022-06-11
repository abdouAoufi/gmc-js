class Student {
	int age;
	String name;
	int score;

	public Student(int age, String name, int score) {
		this.age = age;
		this.name = name;
		this.score = score;
	}

}

class Example {
	public static void main(String[] st) {
		Student myStudent = new Student(19, "Halim", 12);
		Student myStudent2 = new Student(22, "mourad", 12);
		System.out.println(myStudent.age);
	}
}