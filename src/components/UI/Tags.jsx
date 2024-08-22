import styled from "styled-components";

const TagList = styled.ul`
  margin: 10px 0;
  display: flex; /* 가로로 나열 */
  overflow-x: auto; /* 가로 스크롤 가능 */
  -webkit-overflow-scrolling: touch; /* 모바일에서 부드러운 스크롤 */
`;

const TagItem = styled.li`
  padding: 6px;
  background-color: ${(props) => (props.isActive ? "#00964E" : "#e6e6e6")};
  color: ${(props) => (props.isActive ? "white" : "black")};
  border-radius: 10px;
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  margin-right: 6px;
  white-space: nowrap; /* 텍스트가 줄바꿈되지 않도록 설정 */
`;

function Tags({ menuTags, queryTag, onTagClick }) {
  const tagEntries = Object.entries(menuTags);

  return (
    <TagList>
      {tagEntries.map((values, idx) => (
        <TagItem
          key={idx}
          isActive={queryTag === values[0]}
          onClick={() => onTagClick(values[0])}
        >
          {values[1]}
        </TagItem>
      ))}
    </TagList>
  );
}

export default Tags;
