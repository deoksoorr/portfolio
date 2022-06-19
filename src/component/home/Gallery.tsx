import styled from 'styled-components';
import { useAboutStore } from '../../store/about';

const Gallery = () => {
  const { aboutList } = useAboutStore((state) => state);
  return (
    <Box>
      <ul>
        {aboutList.map((item, i) => {
          /*
          var obj = item.stack.length;
          console.log(obj);
          let stack = item.stack;
          if (item.stack.length >= 2) {
            stack[2] = stack[1];
            stack[1] = '/'
          }
          */
          return (
            <li key={i}>
              <a href="" rel="noopener noreferrer">
                <div>
                  <div>
                    <img src={`/images/home/${item.id}.jpeg`} alt="" />
                  </div>
                  <span />
                  <ul>
                    <li>
                      <span>{item.stack}</span>
                    </li>
                    <li>
                      <span>{item.year}</span>
                    </li>
                  </ul>
                  <p>{item.name}</p>
                </div>
              </a>
              <span>{item.num}</span>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

const Box = styled.div`
  margin: 0 auto;
  width: 96vw;
  > ul {
    display: flex;
    justify-content: space-between;
    > li {
      width: 22.5vw;
      position: relative;
      > a {
        transition-delay: 1s;
        > div {
          > span {
            display: block;
            width: 100%;
            height: 1px;
            background: #000;
            margin: 1vw 0;
          }
          > div {
            overflow: hidden;
            height: 30vw;
            transition: border-radius 0.5s cubic-bezier(0.165, 0.84, 0.44, 1),
              filter 0.5s cubic-bezier(0.165, 0.84, 0.44, 1),
              -webkit-filter 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
            > img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          > ul {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5vw;
            span {
              font-size: 12px;
            }
            em {
              font-size: 10px;
            }
          }
          > p {
            font-size: 1.48vw;
            line-height: 0.9;
            font-weight: 400;
          }
        }
      }

      :hover {
        > a {
          > div {
            > div {
              border-radius: 50%;
            }
          }
        }
      }
      > span {
        position: absolute;
        right: -15px;
        top: 0;
        font-size: 12px;
        writing-mode: vertical-rl;
      }
    }
  }
`;
export default Gallery;
