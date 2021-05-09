using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APICall.Models
{
	public class StudentModel
	{
		public int Id { get; set; }
		public string FullName { get; set; }
		public int Age { get; set; }
		public bool Gender { get; set; }

		public string Course { get; set; }
	}
}
