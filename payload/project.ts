import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'ERP 재무 회계 솔루션 개발 및 운영',
      startedAt: '2020-08',
      endedAt: '2025-03',
      where: '더존비즈온 ERP 솔루션 개발 및 운영',
      descriptions: [
        {
          content:
            'SQL 구문에서 where id in (ID) 에 포함되는 ID의 개수가 100개 이상 초과하여 쿼리 속도 이슈 발생. 파라미터 정보를 담은 테이블을 생성하고 ExecutorService를 활용하여 응답 속도 개선',
        },
        {
          content:
            '레이스 컨디션으로 인한 결의서 중복 전표처리 오류 발생. Redis를 활용하여 동시성 처리 개선',
        },
        {
          content:
            'ERP 시스템에서 전자결재 상신 시 특정 테이블에 데이터를 적재해야하는 상황에 서비스마다 전자결재 상신 시 데이터 적재 중복 코드 발생. 이를 개선하기 위해 커스텀 어노테이션을 작성하고 AOP를 적용하여 중복 코드 개선',
        },
        {
          content:
            '팩토리 메서드 패턴을 활용하고 Spring ApplicationContextAware으로 Bean을 조회하여 결의서 프로세스에서 공통적으로 사용하고 있는 법인카드, 현금영수증, 전자세금계산서, 계산서를 결의서 증빙 자료로 연결하는 서비스 개발',
        },
        {
          content:
            '전자결재 반려 후 재상신 과정에서 발생한 예산 초과 입력 오류 발생. 금액 입력 트랜잭션 로그 및 데이터베이스 히스토리 테이블을 조회하여 입력값 변경 이력을 추적. 비즈니스 로직 및 예산 검증 프로세스에서의 문제점을 확인하고 예외 처리 로직을 개선',
        },
      ],
    },
  ],
};

export default project;
