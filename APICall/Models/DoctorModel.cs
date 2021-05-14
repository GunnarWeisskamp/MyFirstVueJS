namespace APICall.Models
{
    public class DoctorModel
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public int Age { get; set; }
        public bool Gender { get; set; }

        public string TypeOfDoctor { get; set; }
    }
}
