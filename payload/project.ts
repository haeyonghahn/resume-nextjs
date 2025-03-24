import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'ERP 재무 회계 솔루션 개발 및 운영',
      startedAt: '2020-08',
      where: '더존비즈온 ERP 솔루션 개발 및 운영',
      descriptions: [
        {
          content:
            'SQL 구문에서 where id in (ID) 에 포함되는 ID의 개수가 100개 이상 초과하여 쿼리 속도 이슈 발생. ID 정보를 테이블에 저장하여 join문으로 쿼리 및 ExecutorService를 활용하여 응답 속도 개선',
        },
        {
          content:
            '레이스 컨디션으로 인한 결의서 중복 전표처리 오류 발생. Redis를 활용하여 동시성 처리 개선',
        },
        {
          content:
            'ERP 시스템에서 데이터 적재 중복 코드 발생. 이를 개선하기 위해 커스텀 어노테이션을 작성하고 AOP를 적용하여 중복 코드 개선',
        },
        {
          content:
            '팩토리 메서드 패턴을 활용하여 결의서 증빙 자료 서비스 개발',
        },
        {
          content:
            '전자결재 반려 후, 문서 재상신 과정에서 예산이 초과되어 입력된 오류 발생. 예산금액 입력 트랜잭션 로그 및 전자결재 히스토리 테이블을 조회하며 입력값 변경 이력을 추적. 비즈니스 로직 및 예산 검증 프로세스에서의 문제점을 확인하고 예외 처리 로직을 개선',
        },
      ],
    },
    {
      title: '온라인 음식 주문 서비스 개발',
      startedAt: '2024-12',
      endedAt: '2025-03',
      where: '패스트캠퍼스 INNER CIRCLE 2기 개발의 민족 팀 백엔드 개발',
      descriptions: [
        {
          content: 'nextjs 도커 이미지 경량화를 통해 인프라 리소스 비용 줄이기',
          href:
            'https://github.com/FC-InnerCircle-ICD2/O2O-BE/wiki/%5BPR%5D-nextjs-%EB%8F%84%EC%BB%A4-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EA%B2%BD%EB%9F%89%ED%99%94%EB%A5%BC-%ED%86%B5%ED%95%B4-%EC%9D%B8%ED%94%84%EB%9D%BC-%EB%A6%AC%EC%86%8C%EC%8A%A4-%EB%B9%84%EC%9A%A9-%EC%A4%84%EC%9D%B4%EA%B8%B0',
        },
        {
          content: '주문 상세 조회 API를 PostgreSQL에서 MongoDB로 바꾼 이유',
          href:
            'https://github.com/FC-InnerCircle-ICD2/O2O-BE/wiki/%5BPR%5D-%EC%A3%BC%EB%AC%B8-%EC%83%81%EC%84%B8-%EC%A1%B0%ED%9A%8C-%EA%B0%9C%EC%84%A0',
        },
        {
          content: 'Terraform 기반 AWS 인프라 자동화 구축',
          href: 'https://github.com/FC-InnerCircle-ICD2/O2O-infra',
        },
        {
          content: '시스템 운영 시 안정성 및 성능 분석을 고려한 모니터링 시스템 구축',
          href: 'https://github.com/FC-InnerCircle-ICD2/O2O-BE/wiki/%5BBE%5D-%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8-%EC%95%B1-%EC%84%9C%EB%B9%84%EC%8A%A4-Grafana-%EB%AA%A8%EB%8B%88%ED%84%B0%EB%A7%81',
        },
        {
          content: '온라인 음식 주문 서비스 개발 히스토리를 남기기 위한 문서 작성',
          href: 'https://github.com/FC-InnerCircle-ICD2/O2O-BE/wiki',
        },
      ],
    },
  ],
};

export default project;
