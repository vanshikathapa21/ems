const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare report",
        description: "Prepare monthly sales report",
        date: "2026-04-17",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Client meeting",
        description: "Discuss project requirements",
        date: "2026-04-16",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix bugs",
        description: "Resolve login issues",
        date: "2026-04-15",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Design UI",
        description: "Create dashboard UI",
        date: "2026-04-17",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update CSS",
        description: "Improve responsiveness",
        date: "2026-04-16",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix alignment",
        description: "Fix navbar alignment issue",
        date: "2026-04-15",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Test UI",
        description: "Cross-browser testing",
        date: "2026-04-14",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "API Integration",
        description: "Integrate recipe API",
        date: "2026-04-17",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix API error",
        description: "Resolve 500 error",
        date: "2026-04-16",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Database setup",
        description: "Setup MongoDB schema",
        date: "2026-04-15",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Write documentation",
        description: "Project documentation",
        date: "2026-04-17",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Review code",
        description: "Review pull requests",
        date: "2026-04-16",
        category: "Code Review",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix errors",
        description: "Fix deployment issues",
        date: "2026-04-15",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Testing",
        description: "Perform unit testing",
        date: "2026-04-17",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Bug report",
        description: "Report UI bugs",
        date: "2026-04-16",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Automation",
        description: "Write test scripts",
        date: "2026-04-15",
        category: "Automation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Performance test",
        description: "Check load handling",
        date: "2026-04-14",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
     localStorage.setItem("employees", JSON.stringify(employees));
        localStorage.setItem("admin", JSON.stringify(admin));
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));

    console.log(employees, admin )
}