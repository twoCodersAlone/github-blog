import { render, screen } from '@testing-library/react';
import { RandomButton, randomTopicHandler } from './random-button';
import { topics } from '@/src/data/topics';

describe('Random Button', () => {
  it('should render', () => {
    render(<RandomButton />);

    expect(screen.getByRole('button')).toHaveTextContent('Choose one to me');
  });

  describe('randomTopicHandler', () => {
    it('call router push with topic href', () => {
      const topicsHrefs = topics.map((topic) => topic.href);
      jest.spyOn(global.Math, 'floor').mockReturnValue(0);

      const topicHref = topicsHrefs[0];
      const push = jest.fn();
      randomTopicHandler(push)();

      expect(push).toHaveBeenCalledWith(topicHref);
    });
  });
});
