'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
export default function SurvivalOfTheRichestPage() {
  return (
    <section className="survival-section">
      <div className="survival-container">
        <div className="survival-hero">
          <span className="survival-badge">ENTREPRENEURSHIP</span>

          <h1>
            Start-ups &amp;
            <span> Survival of the Richest</span>
          </h1>

          <p>Bootstrapping is a perpetual state of running a start-up in a resource crunch.</p>
        </div>

        <article className="survival-card">
          {/* <h2>Start-ups &amp; Survival of the Richest</h2> */}

          <p>
            India is seeing more start-ups today than at any time in history. How many will survive,
            only time will tell. Getting investors to back an idea with their money is the first
            step towards survival. Ideas are fragile and need to be cultivated with capital.
          </p>

          <p>
            The number one reason a start-up idea fails is because it runs out of money.
            Entrepreneurs simply being efficient does not work in the current era; they need to be
            capital efficient.
          </p>

          <div className="quote-box">
            <h3>&quot;Investor money is the difference that makes the difference.&quot;</h3>
          </div>

          <p>
            Getting a start-up off the ground with a prototype is now easier and more affordable
            because of cloud services, technology and online tools. Entrepreneurs planning only for
            salaries, rent and profit through bootstrapping are often creating lifestyle businesses.
          </p>

          <p>
            I call it a living-dead situation because it is about creating income rather than
            wealth. Start-ups poised to become large businesses must plan to infuse growth capital
            into their operations.
          </p>

          <p>
            The idea of giving equity to grow equity is the first step towards wealth creation. The
            air today is filled with new ideas, fresh energy and a passion to become an
            entrepreneur.
          </p>

          <p>
            A capital-efficient start-up understands the correct time to conserve money and when to
            spend it. Investors are smart enough to factor in that accomplishing a vision generally
            takes longer and costs more than originally expected.
          </p>

          <p>
            Entrepreneurs often believe they can accomplish everything with less money than they
            actually need. They embark on their journey with minimal capital, believing they will
            create, generate or raise more money whenever required.
          </p>

          <p>
            Entrepreneurs need to consider investors as friends with resources. A company can scale
            when it has the right team on board. Growth requires visibility, faster product
            development, marketing and brand building, all of which require money.
          </p>

          <p>
            Start-ups need to raise as much capital as they reasonably can, whenever they can.
            Entrepreneurs who become overly obsessed with equity dilution often harm their own
            growth.
          </p>

          <p>
            Many founders are afraid to bring investors on board because they fear losing control.
            Investors should instead be viewed as partners who bring smart money and help reduce the
            risk of fighting the business battle alone.
          </p>

          <div className="survival-highlight">
            <h3>Bootstrapping is an old way of doing business.</h3>
          </div>

          <p>
            A bootstrapped business takes one step at a time and builds through internal accruals
            and customer funding. With a few exceptions, the growth of such start-up companies
            remains slow and difficult to scale.
          </p>

          <p>
            The survival-of-the-fittest theory does not necessarily work for wealth creation.
            Entrepreneurs should stay away from those who say money is not an important resource for
            success.
          </p>

          <p>
            Start-up valuations today can appear astronomical, and seemingly ridiculous investment
            rounds are taking place. Many people believe investors have gone mad when they see
            start-ups raising massive sums of money.
          </p>

          <p>
            However, this money is not always going only into products. It is often being used to
            create categories that did not previously exist. Investments are made to change
            behaviour and create habit-forming technologies.
          </p>

          <p>
            Capital is used to engage customers so they return each time and every time. Spending
            too much or raising too little capital can both result in running out of money and the
            premature death of an idea.
          </p>

          <p>
            The stories of companies that failed because they ran out of cash are numerous. A
            well-funded start-up receives a significant competitive advantage over underfunded
            competitors.
          </p>

          <div className="quote-box">
            <h3>&quot;Bootstrapped entrepreneurs move slowly. Funded start-ups scale.&quot;</h3>
          </div>

          <p>
            Investor money comes with its own conditions and expectations. Capital carries its own
            challenges and drawbacks, but these are generally better than operating a business in a
            constant living-dead state.
          </p>

          <p>
            An entrepreneur&apos;s passionate desire to succeed is not enough to achieve success; it
            must be coupled with capital. Investor capital helps entrepreneurs experiment, explore
            and experience opportunities on the horizon.
          </p>

          <p>
            However, a rogue entrepreneur who sees funding as a personal reward can quickly run out
            of cash, causing the business to fail. Entrepreneurs must treat investor capital as a
            responsibility.
          </p>

          <p>
            With capital in hand, entrepreneurs can choose a large and rapidly growing market to
            address. Investors will consistently challenge entrepreneurs to consider how they can
            grow their businesses ten times faster in the shortest possible period.
          </p>

          <p>
            Capital also allows a start-up to pivot midway if it discovers a stronger opportunity to
            scale. Entrepreneurship and finance are deeply intertwined, with money positioned at the
            core.
          </p>

          <p>
            Entrepreneurs who view investor money as a responsibility tend to become successful and
            secure follow-on investment rounds to build their vision.
          </p>

          <p>
            With investor money on its side, a start-up gains an unfair competitive advantage. As an
            angel investor, I would like to bet on an entrepreneur who understands how to win with
            the support of capital.
          </p>

          <p>
            I am excited about the opportunity in India and the potential of growth-focused
            start-ups.
          </p>

          <div className="ending-box">
            Entrepreneur&apos;s passion alone does not create success.
            <br />
            <br />
            Success is achieved when passion is backed by the right capital at the right time.
          </div>
        </article>
        <br />

        {/* BOTTOM CONTENT */}

        <div className="deal-bottom-section">
          <div className="deal-bottom-container">
            <p className="deal-bottom-text">
              Entrepreneur&apos;s passionate desire to succeed is not enough to achieve success; it
              needs to be coupled with capital. Spending too much or raising very little capital
              both can end up with running out of money and lead to premature death of an idea.
            </p>

            <Link href="/survival-of-the-richest" className="talk-btn">
              <span>Learn more</span>

              <div className="talk-btn-icon">
                <ArrowUpRight size={18} />
              </div>
            </Link>
          </div>
        </div>

        <div className="learn-btn-wrap">
          <Link href="/" className="learn-btn">
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
