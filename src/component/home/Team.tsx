import styled from 'styled-components';
import useWorkedStore from '../../store/team';
import { WorkedType } from '../../types/workedType';

const Worked = () => {
  const { workedList } = useWorkedStore((state) => state);
  return (
    <Box>
      <h1>Team</h1>

      {}
      <div className="work_list">
        {workedList.map((team: WorkedType, i: number) => {
          return (
            <div className="work_list_detail" key={i}>
              <div className="work_title">
                <input type="radio" name="accordion2" id={`works${i}`}></input>
                <label htmlFor={`works${i}`}>
                  <ul>
                    <li>{team.title}</li>
                    <li>{team.subtitle}</li>
                    <li className="btn"></li>
                  </ul>
                </label>
                <div className="work_detail">
                  <ul>
                    <li></li>
                    <li>
                      <img
                        src={`/images/team/0${i + 1}.png`}
                        alt={team.korName}
                      />
                      <p>{team.position}</p>
                      <em>{team.engName}</em>
                      <span>{team.korName}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Box>
  );
};

const Box = styled.div`
  margin: 0 auto;
  margin-top: 8vw;
  margin-bottom: 4vw;
  width: 96vw;
  padding-bottom: 30px;
  h1 {
    margin-bottom: 4vw;
    font-size: 2.78vw;
    line-height: 0.8;
    font-weight: 400;
  }
  .work_list {
    margin-bottom: 4vw;
    .work_list_detail {
      border-bottom: 1px solid rgb(205, 205, 205);
      .work_title {
        input[id*='works'] {
          display: none;
        }
        > label {
          > ul {
            padding-top: 1.4vw;
            padding-bottom: 1.4vw;
            font-size: 0.8vw;
            display: flex;
            width: 100%;
            justify-content: space-between;
            position: relative;
            cursor: pointer;
            > li:nth-child(1),
            > li:nth-child(2) {
              width: 50%;
            }
            > li:nth-child(3) {
              position: absolute;
              right: 0;
            }
            > li:nth-child(3):before {
              content: 'MORE +';
            }
          }
        }
        .work_detail {
          max-height: 0;
          transition: 0.35s;
          overflow: hidden;
          > ul {
            display: flex;
            justify-content: space-between;
            > li {
              width: 50%;
              > img {
                width: 20vw;
              }
              > p {
                margin: 20px 0 10px 0;
                width: 80%;
                font-size: 0.7vw;
                line-height: 1.2;
                color: #757575;
              }
              > em {
                font-weight: 500;
                font-size: 1.5vw;
                margin-right: 5px;
              }
              > span {
                color: #757575;
              }
            }
          }
        }

        input[id*='works']:checked + label {
          > ul {
            > li:nth-child(3):before {
              content: 'CHOOSE OTHER :)';
            }
          }
        }
        input[id*='works']:checked + label + .work_detail {
          max-height: 500px;
          margin-bottom: 0;
        }
      }
    }
  }
`;
export default Worked;
