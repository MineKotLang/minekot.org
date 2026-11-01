import React from 'react'

import { MarkdownPageShell } from '../components/MarkdownPage.tsx'
import { useMessages } from '../hooks/useLanguage.tsx'
import roadmapData from '../config/roadmap.json'

interface RoadmapMilestone {
  id: string
  'quarter-key': string
  'title-key': string
  status: 'completed' | 'in-progress' | 'planned'
  'description-key': string
  tasks: Array<{ 'text-key': string; done: boolean }>
}

type RoadmapStatus = RoadmapMilestone['status']

interface RoadmapConfig {
  'lead-key': string
  milestones: RoadmapMilestone[]
}

const ROADMAP = roadmapData as RoadmapConfig

const STATUS_LABEL_KEYS: Record<RoadmapStatus, string> = {
  completed: 'roadmap-status-completed',
  'in-progress': 'roadmap-status-in-progress',
  planned: 'roadmap-status-planned',
}

/**
 * Roadmap page.
 * @returns The roadmap page element.
 */
export const RoadmapPage: React.FC = () => {
  const messages = useMessages()

  return (
    <MarkdownPageShell title={messages['page-roadmap']}>
      <div className="roadmap">
        <p className="roadmap__lead">{messages[ROADMAP['lead-key']]}</p>

        <ol className="roadmap__list">
          {ROADMAP.milestones.map((milestone) => (
            <li key={milestone.id} className={`roadmap__item roadmap__item--${milestone.status}`}>
              <span className="roadmap__marker" aria-hidden="true" />
              <div className="roadmap__content">
                <div className="roadmap__header">
                  <span className="roadmap__quarter">{messages[milestone['quarter-key']]}</span>
                  <span className="roadmap__badge">{messages[STATUS_LABEL_KEYS[milestone.status]]}</span>
                </div>
                <h3 className="roadmap__title">{messages[milestone['title-key']]}</h3>
                <p className="roadmap__desc">{messages[milestone['description-key']]}</p>

                <ul className="roadmap__tasks">
                  {milestone.tasks.map((task, index) => (
                    <li key={index} className={`roadmap__task ${task.done ? 'roadmap__task--done' : ''}`}>
                      <i className={`fa-solid ${task.done ? 'fa-check' : 'fa-circle'} roadmap__task-icon`}></i>
                      {messages[task['text-key']]}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </MarkdownPageShell>
  )
}
