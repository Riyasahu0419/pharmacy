
import { useState } from 'react'
import './App.css'

function App() {
  const [opened, setOpened] = useState(false)
  const [showLastMessage, setShowLastMessage] = useState(false)

  return (
    <main className="page">

      {/* ================= BACKGROUND ================= */}

      <div className="moon"></div>

      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      <div className="particles">
        <span>✦</span>
        <span>·</span>
        <span>✦</span>
        <span>·</span>
        <span>✧</span>
        <span>·</span>
        <span>✦</span>
        <span>·</span>
        <span>✧</span>
        <span>·</span>
      </div>

      {/* ================= WELCOME SCREEN ================= */}

      {!opened ? (

        <section className="welcome">

          <div className="top-heart">
            ♡
          </div>

          <p className="eyebrow">
            something I made especially for you
          </p>

          <h1>
            Happy Birthday
            <span>to someone very special. MAN.</span>
          </h1>

          <div className="small-line"></div>

          <p className="welcome-text">
            I know things between us aren't perfect right now.
            <br />
            But today, I don't want to talk about that.
            <br />
            <strong>Today is about you.</strong>
          </p>

          <button
            className="open-button"
            onClick={() => setOpened(true)}
          >
            <span>Open this</span>
            <span className="button-heart">♡</span>
          </button>
<br />
          <p className="scroll-hint">
            made with a little courage & a lot of thought
          </p>

        </section>

      ) : (

        /* ================= MAIN BIRTHDAY PAGE ================= */

        <section className="letter-page">

          {/* HEADER */}

          <div className="letter-header">

            <p className="eyebrow">
              today is yours
            </p>

            <h1>
              Happy Birthday
              <span>❤️</span>
            </h1>

            <p className="date-line">
              A little something for you.
            </p>

          </div>


          {/* ================= LETTER CARD ================= */}

          <article className="letter-card">

            <div className="card-decoration">
              ✦
            </div>

            <p className="hello">
              Hey you,
            </p>

            <p>
              I don't know what you expected from me today.
              Maybe nothing.
              Maybe you didn't even want to hear from me.
            </p>

            <p>
              But I couldn't let your birthday pass without
              wishing you properly.
            </p>

            <p>
              So instead of sending you another ordinary
              birthday message, I thought I'd make you
              something.
            </p>


            {/* ================= APOLOGY ================= */}

            <div className="divider">
              <span>♡</span>
            </div>

            <h2>
              First,
              <span>I'm sorry.</span>
            </h2>

            <p>
              I know I made mistakes.
              I know there were things you tried to make
              me understand that I didn't understand in time.
            </p>

            <p>
              And I know saying sorry doesn't magically
              undo everything.
            </p>

            <p>
              I'm not expecting one message to fix everything.
              I'm not expecting you to forget anything.
            </p>

            <p className="highlight">
              I just want you to know that I understand
              my mistakes now.
            </p>

            <p>
              And if I could go back and handle things
              differently, I would.
            </p>


            {/* ================= BIRTHDAY ================= */}

            <div className="divider">
              <span>✦</span>
            </div>

            <h2>
              But today...
              <span>is yours.</span>
            </h2>

            <p>
              So I don't want this page to be about sadness.
            </p>

            <p>
              I want you to have a beautiful birthday.
            </p>

            <p>
              I hope you smile a lot today.
              <br />
              I hope you eat your favourite food.
              <br />
              I hope you spend time with people who make
              you genuinely happy.
            </p>

            <p>
              I hope this year brings you closer to everything
              you've been working for.
            </p>

            <p>
              More peace.
              <br />
              More happiness.
              <br />
              More reasons to smile.
              <br />
              And fewer reasons to doubt yourself.
            </p>


            {/* ================= CUTE BIRTHDAY BOX ================= */}

            <div className="birthday-box">

              <div className="cake">
                🎂
              </div>

              <p className="birthday-title">
                Happy Birthday, Man ❤️
              </p>

              <p className="birthday-subtitle">
                Khubsurat insaan ho tum har tarike se ... haye! 🧿
              </p>

              <p className="birthday-note">
                Thu thu thu... nazar na lage.
              </p>

            </div>


            

            {/* ================= NO PRESSURE ================= */}

            <div className="divider">
              <span>✦</span>
            </div>

            <h2>
              One thing I don't want
              <span>you to misunderstand.</span>
            </h2>

            <p>
              I'm not making this website to convince you
              of anything.
            </p>

            <p>
              I'm not asking you to forgive me.
              I'm not asking you to reply.
              I'm not asking you to make everything okay.
            </p>

            <p>
              I just wanted to do something that came
              from me, for you.
            </p>

            <p className="highlight">
              Because despite everything,
              your birthday still matters to me.
            </p>


            {/* ================= WISH ================= */}

            <div className="birthday-final">

              <span>
                Happy Birthday, man.
              </span>

              <strong>
                I hope you get everything you wish for.
              </strong>

              <small>
                And yes... I still hate you, man. ❤️
              </small>

            </div>


            {/* ================= SIGNATURE ================= */}

            <div className="signature">

              <p>
                Take care of yourself.
              </p>

              <span>
                — from someone who genuinely wishes you well ♡
              </span>

            </div>


            {/* ================= LAST BUTTON ================= */}

            <button
              className="last-button"
              onClick={() => setShowLastMessage(true)}
            >
              <span>
                There's one last thing...
              </span>

              <span>
                →
              </span>
            </button>


            {/* ================= LAST MESSAGE ================= */}

            {showLastMessage && (

              <div className="last-message">

                <div className="last-icon">
                  ♡
                </div>

               

                <p className="final">
                  Happy Birthday,
                  <br />
                  khubsurat insaan. 🧿❤️
                </p>

                <p className="hate-you">
                  Now go enjoy your day.
                  <br />
                 jald hi mulakat hogi
                 <br />
                  <strong>
                    I hate you, man.
                  </strong>
                </p>

              </div>

            )}

          </article>

        </section>

      )}

      {/* ================= FOOTER ================= */}

      <footer>
        made with thought, not pressure.
      </footer>

    </main>
  )
}

export default App
