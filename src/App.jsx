import React from "react";
import "./App.css";

const courses = [
  {
    title: "Linux Fundamentals",
    category: "FOUNDATION",
    progress: 82,
    lessons: "18 / 22 lessons",
    icon: "⌘",
  },
  {
    title: "Docker & Containers",
    category: "CONTAINERS",
    progress: 64,
    lessons: "16 / 25 lessons",
    icon: "▣",
  },
  {
    title: "Kubernetes Essentials",
    category: "ORCHESTRATION",
    progress: 38,
    lessons: "9 / 24 lessons",
    icon: "◈",
  },
];

const roadmap = [
  { name: "Linux & Networking", status: "Completed", icon: "✓" },
  { name: "Git & GitHub", status: "Completed", icon: "✓" },
  { name: "Docker", status: "In Progress", icon: "→" },
  { name: "Kubernetes", status: "Upcoming", icon: "4" },
  { name: "CI/CD Pipelines", status: "Upcoming", icon: "5" },
  { name: "Cloud & AWS", status: "Upcoming", icon: "6" },
];

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">D</div>
          <div>
            <h2>domo</h2>
            <span>DEVOPS LAB</span>
          </div>
        </div>

        <div className="sidebar-section">
          <p className="section-label">LEARN</p>

          <a className="nav-item active" href="#">
            <span>⌂</span>
            Dashboard
          </a>

          <a className="nav-item" href="#">
            <span>▣</span>
            Courses
          </a>

          <a className="nav-item" href="#">
            <span>◈</span>
            Roadmap
          </a>

          <a className="nav-item" href="#">
            <span>⌘</span>
            Labs
          </a>
        </div>

        <div className="sidebar-section">
          <p className="section-label">RESOURCES</p>

          <a className="nav-item" href="#">
            <span>▤</span>
            Documentation
          </a>

          <a className="nav-item" href="#">
            <span>◉</span>
            Community
          </a>
        </div>

        <div className="sidebar-bottom">
          <div className="streak-card">
            <div className="streak-icon">🔥</div>
            <div>
              <strong>12 day streak</strong>
              <span>Keep learning!</span>
            </div>
          </div>

          <div className="user-profile">
            <div className="avatar">AS</div>
            <div>
              <strong>Alex Sharma</strong>
              <span>DevOps Learner</span>
            </div>
            <button>•••</button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="main-content">
        <header className="topbar">
          <div>
            <p className="eyebrow">THURSDAY, OCTOBER 8</p>
            <h1>Good morning, Alex 👋</h1>
          </div>

          <div className="top-actions">
            <button className="search">
              <span>⌕</span>
              Search anything...
              <kbd>⌘ K</kbd>
            </button>

            <button className="icon-button">◔</button>
            <div className="mini-avatar">AS</div>
          </div>
        </header>

        {/* Hero */}
        <section className="hero">
          <div className="hero-content">
            <div className="terminal-tag">
              <span className="pulse"></span>
              YOUR DEVOPS JOURNEY
            </div>

            <h2>
              Build. Automate.
              <br />
              <span>Deploy.</span>
            </h2>

            <p>
              Master the tools and practices that power modern engineering
              teams. Learn by building real-world infrastructure.
            </p>

            <div className="hero-buttons">
              <button className="primary-button">
                Continue learning
                <span>→</span>
              </button>

              <button className="secondary-button">
                View roadmap
              </button>
            </div>
          </div>

          <div className="terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <span>deploy.sh</span>
              <span className="terminal-status">● LIVE</span>
            </div>

            <div className="terminal-body">
              <p>
                <span className="green">$</span> docker build -t domo-app .
              </p>
              <p className="muted">Building application...</p>
              <p>
                <span className="green">✓</span> Image created successfully
              </p>
              <p>
                <span className="green">$</span> kubectl apply -f deployment.yml
              </p>
              <p className="muted">deployment.apps/domo created</p>
              <p>
                <span className="green">✓</span> Deployment successful
              </p>
              <p>
                <span className="purple">→</span> Status:{" "}
                <span className="green">running</span>
              </p>
              <span className="cursor"></span>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon blue">◷</div>
            <div>
              <span>LEARNING TIME</span>
              <strong>24h 38m</strong>
              <small>+4h this week</small>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon purple">◆</div>
            <div>
              <span>COURSES</span>
              <strong>4 / 12</strong>
              <small>33% completed</small>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">✓</div>
            <div>
              <span>LABS COMPLETED</span>
              <strong>28</strong>
              <small>+6 this week</small>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange">⚡</div>
            <div>
              <span>SKILL SCORE</span>
              <strong>742</strong>
              <small>Top 18%</small>
            </div>
          </div>
        </section>

        <div className="content-grid">
          {/* Continue Learning */}
          <section className="panel courses-panel">
            <div className="panel-heading">
              <div>
                <span className="panel-label">KEEP GOING</span>
                <h2>Continue learning</h2>
              </div>
              <a href="#">View all →</a>
            </div>

            <div className="course-list">
              {courses.map((course) => (
                <div className="course" key={course.title}>
                  <div className="course-icon">{course.icon}</div>

                  <div className="course-info">
                    <span>{course.category}</span>
                    <h3>{course.title}</h3>

                    <div className="progress-row">
                      <div className="progress">
                        <div
                          className="progress-fill"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <strong>{course.progress}%</strong>
                    </div>

                    <small>{course.lessons}</small>
                  </div>

                  <button className="play-button">▶</button>
                </div>
              ))}
            </div>
          </section>

          {/* Roadmap */}
          <section className="panel roadmap-panel">
            <div className="panel-heading">
              <div>
                <span className="panel-label">YOUR PATH</span>
                <h2>DevOps roadmap</h2>
              </div>
              <a href="#">Explore →</a>
            </div>

            <div className="roadmap">
              {roadmap.map((item, index) => (
                <div
                  className={`roadmap-item ${item.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                  key={item.name}
                >
                  <div className="roadmap-line">
                    <div className="roadmap-number">{item.icon}</div>
                    {index !== roadmap.length - 1 && (
                      <div className="line"></div>
                    )}
                  </div>

                  <div className="roadmap-info">
                    <strong>{item.name}</strong>
                    <span>{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Bottom section */}
        <section className="bottom-grid">
          <div className="quote-card">
            <span className="quote-mark">“</span>
            <p>
              Great DevOps engineers don't just know the tools. They understand
              how everything connects.
            </p>
            <span className="quote-author">— Domo Learning Principle</span>
          </div>

          <div className="practice-card">
            <div>
              <span className="panel-label">DAILY PRACTICE</span>
              <h2>Ready for a challenge?</h2>
              <p>
                Complete today's Kubernetes troubleshooting lab.
              </p>
            </div>

            <button className="primary-button">
              Start lab <span>→</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;