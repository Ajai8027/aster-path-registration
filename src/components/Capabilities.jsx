import communityIcon from '../assets/icon_community.svg';
import flexibleIcon from '../assets/icon_flexible.svg';
import guidedIcon from '../assets/icon_guided.svg';
import './Capabilities.css';

const features = [
  {
    number: '01',
    title: 'Mentor-led learning',
    description: 'Clear guidance from experienced educators.',
    icon: guidedIcon,
  },
  {
    number: '02',
    title: 'Built for your schedule',
    description: 'Evening and weekend learning options.',
    icon: flexibleIcon,
  },
  {
    number: '03',
    title: 'Grow together',
    description: 'A supportive learning community.',
    icon: communityIcon,
  },
];

export default function Capabilities() {
  return (
    <section className="capabilities" id="programs" aria-labelledby="capabilities-heading">
      <div className="container">
        <p className="eyebrow capabilities__eyebrow">Learn with confidence</p>
        <h2 className="section-heading capabilities__heading" id="capabilities-heading">
          Support for every step
        </h2>
        <div id="how-it-works">
          <ul className="capabilities__list">
            {features.map((feature) => (
              <li className="capabilities__item" key={feature.number}>
                <article className="capabilities__card">
                  <div className="capabilities__card-top">
                    <span className="capabilities__number" aria-hidden="true">{feature.number}</span>
                    <img
                      className="capabilities__icon"
                      src={feature.icon}
                      alt=""
                      width="96"
                      height="96"
                      loading="lazy"
                    />
                  </div>
                  <div className="capabilities__card-body">
                    <h3 className="capabilities__title">{feature.title}</h3>
                    <p className="capabilities__description">{feature.description}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
