import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: string;
  link?: string;
  className?: string;
}

export default function FeatureCard({
  title, 
  description, 
  icon, 
  link, 
  className
}: FeatureCardProps) {
  return (
    <div className={clsx('card', styles.featureCard, className)}>
      {icon && (
        <div className={styles.icon}>
          <span className={styles.iconText}>{icon}</span>
        </div>
      )}
      <div className="card__header">
        <h3>{title}</h3>
      </div>
      <div className="card__body">
        <p>{description}</p>
      </div>
      {link && (
        <div className="card__footer">
          <a href={link} className="button button--primary">
            Learn More
          </a>
        </div>
      )}
    </div>
  );
} 