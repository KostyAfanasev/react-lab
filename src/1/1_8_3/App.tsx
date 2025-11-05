export interface Story {
  id: string;
  label: string;
} 

const stories: Story[] = [];
export default function Wrapper(){
  return <StoryTray stories={stories}/>;
}

// Создается новый массив, а не мутируются props
 function StoryTray({ stories }: { stories: Story[] }) {
  const storiesWithCreate = [...stories, { id: 'create', label: 'Create Story' }];

  return (
    <ul>
      {storiesWithCreate.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
    </ul>
  );
}